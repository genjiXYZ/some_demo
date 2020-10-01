const express = require('express')

const Core = require('@alicloud/pop-core');
const cors = require('cors')
const path = require('path')
const swaggerJsdoc = require('swagger-jsdoc')

const swaggerui = require('swagger-ui-express')

const app = express()
app.use(cors())


var options = {
	definintion:{
	
		info:{
			title: 'Hello World', // Title (required)	      title: 'Hello World', // Title (required)
			version: '1.0.0', // Version (required)

		},
		apis:[path.join(__dirname,'/*.js')]
		
	}

}
var swaggerSpec = swaggerJsdoc(options)
app.use('/apidoc',swaggerui.serve,swaggerui.setup(swaggerSpec) )




app.get('/', function (req, res) {
	res.send('Hello 123')
})
app.get("/random", (req, res) => {

	let Vcode = ('000000' + Math.floor(Math.random() * 999999)).slice(-6)

	res.send(Vcode)
})

app.get("/sms", async (req, res) => {
	let client = new Core({
		accessKeyId: '***',
		accessKeySecret: '***',
		endpoint: 'https://dysmsapi.aliyuncs.com',
		apiVersion: '2017-05-25'
	});
	let Vcode = Math.ceil(Math.random() * 1000000)
	let params = {
		"RegionId": "cn-hangzhou",
		"PhoneNumbers": "dfd",
		"SignName": "Genji网站",
		"TemplateCode": "SMS_192576752",
		"TemplateParam": `{\"code\":\"${Vcode}\"}`
	}

	let requestOption = {
		method: 'POST'
	};

	client.request('SendSms', params, requestOption).then((result) => {
			console.log('短信发送成功,在路上了请稍等')
			res.status(200).send(JSON.stringify(result))
		},
		(ex) => {
			res.status(406).send(ex)
		})


})
//////qiniu


const qiniu = require('qiniu')


app.get("/smsqiniu", async (req, res) => {


	let Mac = new qiniu.auth.digest.Mac(
		"lykj2enB7q8F-3ZX3N8q1z013TFkQnbhwJqUSYQ5",
		"dmZOsFim5-kfAuAj1zkIqawNo4tSd4ymfeBnDMDv",
	);
	console.log(Mac)
	let Vcode = Math.ceil(Math.random() * 1000000)
	let params = {
		"template_id": "222",
		"mobile": "111",
		"parameters": `{\"code\":\"${Vcode}\"}`
	}

	

	let re = await qiniu.sms.message.sendMessage(params, Mac,function(err, resp){
		
			console.log(err)
			console.log( resp)
			res.send(resp)

	}
	 )


})







app.listen(3000, () => {
	console.log("http://localhost:3000")
})