FROM alpine

RUN addgroup -S mercari && adduser -S trainee -G mercari
# RUN chown -R trainee:mercari /path/to/db
ENV project_dir=/home/trainee
WORKDIR $project_dir
copy python python
copy db db
RUN apk update && apk add --no-cache sqlite
RUN python -m pip install --upgrade pip
RUN cd python && pip install --no-cache-dir -r requirements.txt

RUN chown -R trainee:mercari /home/trainee/db
USER trainee

CMD ["uvicorn", "main:app", "--reload", "--port", "9000"]
