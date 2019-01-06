const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    pusher: {
        appId: '250247',
        key: '6a300271d86955a4fbe7',
        secret: 'b30f63250e9549698531',
        encrypted: true,
        channelPrefix: isProd ? '' : 'dev.',
    },
    server: {
        google: {
            id: 'ga:106152872',
            type: 'service_account',
            projectId: 'nownews',
            privateKeyId: '9e873c492f731807b58041e27055d104f5b548d2',
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDo6ZNM5idMPhEY\nZRgmPwxUWIaTfc5N9wRmEZQ0tink2DXLfRfhnrsHDTPI9DPWgQZ+076xHl+aLcWf\nDoUKytC5x6JC5jr5NEH7tk+tWE4UEEOCCBRUVSKGxXeXEYm0Z7beBDG1tyWo/RBY\nyM7EwGk1XUk8qxgCrGjmUfQbcr0XuUQZoxzrsXqvyhcN6qMJsg9sTCST4qHFG2P5\nerWSp4W3/35bL1CKYVNoO4oiPJsI+GsuFFE5VcOqhxOTOUn+Ey1kf5zXHjUkc6f2\nlgW8R+zY/2meW/zkFGweqgw467U2lZhlokDAC5kybBXHcAy+Eg4GK7crs0X0nf4d\nL/3s3rD9AgMBAAECggEAIye+WAkVPWjQ48G+l2dE0SZbib+feB0kyNM2b45fXG9W\nD1TeWeu/hxzzCA30FRh8hoAndEyFWZw3C/8BDdP3FVOQplBh7mN44iludVey0Uxz\nJBlcGC6Re44qst6uzlApRfGUHz15rbwkz4Hf08rHForyFvosMZscakdMdSgoan/+\ngED+iGnBRLRyy62Yvtmpdx719MrKRwoZHqmxjRsLgCOAtjg3TJQabuIG2EAaAp/g\nMtahykBNrybM3jnOpRo8dpmJm8rRKwmIJaFrKrCObEPDtPEwGEfrVXyU5yrhwkmS\nHptVeEG9jtHrgqXXVFm3ApSanXGzP3aplnK65Jvy8QKBgQD/zGigoufK4rz3TO5s\npyyuLR48JZTGk/0rIGwqTVOJ95YrLOIZTGdBmBjp+xwY3lHFI8VHddMZ06ZPIwXb\nQA/YAesDHIZFgDkgVGq4lh7toz9vu5MOjbLFnfg91vXlOpYuo2zX0EcKCPguVDzO\nAc5PHt3MKmOH/5oVDJkNMmkXtwKBgQDpGI0FTkRP4TFeRoNlXtXooMkoNFCSXxIA\nuK+3TAqSzjSCPKqnOl6B8wJIhIcJSmHW7x0gTsqcMGiVGqA1HGYMlx2nJtzALqp0\nMZrFBSUjUQWk+5smMvpZcu3I5xcEio8wZ7JAKT2g2Vfk2OxjOHWN7o+EeCRZnje+\n53wYL5F06wKBgFTBkw1ezPTRqhE7AWko/0n7EyCUxzYBBQrMJGrj0kFNswk9RvFg\n+nmmfuLQXF/1Eh0DHDPwW3EcSue/0An0sQs+n3MZeXf/423N6sqcm0TcKYHJIhHZ\na5nFHOLInhNFFUwAxGjBzzgI/srDCJ6txIE81fr3NKF0VMaStQfFY0MDAoGBANP1\nWTa75u5kLgo2QIFLbWQt4P1IJQQUo0A4sMASy4KXM7RCCkQqlYnBOhBLQqe2FaXm\npSuduiuw8Ui0f34MJtfIClTWx+GSDbm+6afCd/TXVjSh/oEL1g7ErWkEii+891vi\nz3n8hmffe0dD4iCPVIYNqj+hKBy9/J8BzBwKFVClAoGAEqphcEq7SdkWMf78cLpz\nvELMnQnFWXj/8RWHdYP4ewBT4xCYhIVT2dzfJdXza+5v9rxA0YAYahfTBgARP1L+\nKNlyb+GpZ84QNAb+GMvpvBQ84YP3hskqYX3NUW3F+5jl6Ny7B8BQfiVKC2kOcaYB\nqzrcfwsWhdv7hxoFy5uttjs=\n-----END PRIVATE KEY-----\n",
            clientEmail: 'nownews-ga@nownews.iam.gserviceaccount.com',
            clientId: '116767210315823704760',
            authUri: 'https://accounts.google.com/o/oauth2/auth',
            tokenUri: 'https://oauth2.googleapis.com/token',
            authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
            clientX509CertUrl: 'https://www.googleapis.com/robot/v1/metadata/x509/nownews-ga%40nownews.iam.gserviceaccount.com'
        },
    },
    web: {
        apiServer: isProd ? 'http://10.20.200.190:5000' : 'http://127.0.0.1:5000',
        mapsApiKey: 'AIzaSyDw2LzthzsRls-oPyKRDPHFz8_WFivsXcM'
    }

};
