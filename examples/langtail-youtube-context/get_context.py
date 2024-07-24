# get_context.py

import sys
import subprocess
import os

def download_transcript(video_url):
    command = f"yt-dlp --write-auto-sub --sub-lang en --skip-download {video_url} -o 'transcript.%(ext)s'"
    subprocess.run(command, shell=True, check=True)
    transcript_file = 'transcript.en.vtt'
    if os.path.exists(transcript_file):
        with open(transcript_file, 'r') as file:
            transcript = file.read()
        return transcript
    else:
        raise FileNotFoundError(f"Transcript file {transcript_file} not found")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python get_context.py <YouTube URL>")
        sys.exit(1)
    
    video_url = sys.argv[1]
    try:
        transcript = download_transcript(video_url)
        print(transcript)
    except Exception as e:
        print(f"Error: {e}")
