#!/usr/bin/env bash
# Build + render one or more episodes end to end using read-only .tts-env (WORKERS=1, ultrafast, 24fps, yuv420p TV range, loudnorm -16 LUFS / -1.5 dBTP).
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
PY="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python"
FFMPEG="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffmpeg"
FFPROBE="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffprobe"
mkdir -p "$ROOT/public/videos/posters"
find tts_cache -name "*.raw.wav" -delete 2>/dev/null || true
find tts_cache -name "*.wav" -size 0 -delete 2>/dev/null || true
for T in "$@"; do
  MP4="$ROOT/public/videos/$T.mp4"
  JPG="$ROOT/public/videos/posters/$T.jpg"
  if [ -s "$MP4" ] && [ -s "$JPG" ]; then
    INFO="$("$FFPROBE" -v error -show_entries stream=codec_name,pix_fmt,color_range,r_frame_rate -of compact "$MP4" || true)"
    DUR="$("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || echo 0)"
    if echo "$INFO" | grep -q "codec_name=h264" && echo "$INFO" | grep -q "codec_name=aac" && echo "$INFO" | grep -q "pix_fmt=yuv420p" && echo "$INFO" | grep -q "color_range=tv" && echo "$INFO" | grep -q "r_frame_rate=24/1" && awk "BEGIN {exit !($DUR > 60)}"; then
      echo "=== $T: already valid V3 ($DUR s, 24fps yuv420p tv) — skipping"
      continue
    fi
  fi
  echo "=== $T: lint"; "$PY" lint_episode.py "episodes/$T.py"
  if [ -s "out/$T/audio.wav" ] && [ -s "out/$T/timeline.json" ]; then
    echo "=== $T: voices + timeline already built — reusing"
  else
    echo "=== $T: voices + timeline"; OMP_NUM_THREADS=2 MKL_NUM_THREADS=2 "$PY" build.py "episodes/$T.py" "out/$T"
  fi
  echo "=== $T: frames (workers=${WORKERS:-1})"; rm -f out/$T/part*.mp4; "$PY" render_py.py "out/$T" --workers "${WORKERS:-1}"
  echo "=== $T: encode"
  "$FFMPEG" -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy \
    -af "loudnorm=I=-16:TP=-2.0:LRA=11,alimiter=limit=0.72:attack=0.1:release=50:level=false" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$MP4"
  "$PY" render_py.py "out/$T" --poster "$JPG"
  rm -f out/$T/part*.mp4
  echo "=== $T: done $(du -h "$MP4" | cut -f1) $("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4")s"
done
