import React from 'react';
import { UploadToS3 } from 'react-upload-to-s3';
import { Col, Row, Container } from 'react-bootstrap';

const S3Uploader  = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col sm={12} xs={12} md={6} xxl={6}>
          <UploadToS3
            bucket="superflows-myuploads"
            awsRegion="your_region"
            awsKey="your_aws_key"
            awsSecret="your_aws_secret"
            awsMediaConvertEndPoint="your_endpoint"
            type="image"
            mediaConvertRole="mediaconvert_role"
            onResult={(result) => {
              console.log('on Result', result);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};


export default S3Uploader;