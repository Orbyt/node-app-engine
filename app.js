import express from 'express'
import storage from '@google-cloud/storage'
const gcs = storage();
const app = express();


app.get('/', (req, res) => {

  //switch to your bucket name.
  let clipsBucket = gcs.bucket('video-clips')
  clipsBucket.getFiles(function(err, files) {
    if (!err) {
      // files is an array of File objects.
      console.dir(files)
    }
  });
  // lists all buckets.
  // gcs.getBuckets(function(err, buckets) {
  //   if (!err) {
  //     // buckets is an array of Bucket objects.
  //     console.dir(buckets)
  //   } else {
  //     console.log(err)
  //   }
  // });
  res.status(200).send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
