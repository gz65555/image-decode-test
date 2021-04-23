# 测试方法

1. 生成图片

``` shell
npm run generate
```

2. 启动服务器

``` shell
npm run serve
```

3. 打开页面

  - `bitmap-blob.html` 使用 createImageBitmap 解码，用 Blob 作为源数据
  - `bitmap-decode-worker.html` 使用 5 个 worker 线程调用 createImageBitmap 解码，以 blob 为源数据
  - `image-bitmap-upload.html` 使用 createImageBitmap 解码，用 Image 对象作为源信息
  - `image-upload-decode.html` 使用 image decode 方法解码
  - `image-upload.html` 直接上传 Image 对象，作为对照

4. 打开 console 即可以看到执行时长
