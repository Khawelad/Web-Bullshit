import Clarifai from 'clarifai';
const app = ClarifaiApp(api_key = '0d7242130f284d0eb9147b830045920c');
model = app.public_models.general_model model.model_version = 'aa7f35c01e0642fda5cf400f543e7c40';

response = model.predict(
  Image(url = "https://samples.clarifai.com/metro-north.jpg")
)