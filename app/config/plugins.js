module.exports = ({ env }) => {
    if(env('NODE_ENV') === 'production'){
        return {
            upload: {
                        provider: 'aws-s3',
                        providerOptions: {
                        acessKeyId: env('AWS_ACESS_KEY_ID'),
                        secretAcessKey: env('AWS_ACESS_KEY_SECRET'),
                        region: env('AWS_REGION'),
                        params: {
                        Bucket: env('AWS_BUCKET')
                    }
                }
            }
        }
    }
    return {

    }
}