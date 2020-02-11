from firebase import firebase
# virtualenv -p C:\Users\diego\AppData\Local\Programs\Python\Python36\python.exe venv

firebase = firebase.FirebaseApplication(
    'https://practicas-tendencias.firebaseio.com',
    None
)

def lambda_handler(event, context):
    opcion = event.get('opcion', None)
    data = event.get('data')
    respuesta = None

    if opcion == '1': # CONSULTAR LAS URLS DE LAS IMAGENES
        respuesta = firebase.get('/imagenes', None)
    elif opcion == '2': # GUARDAR LAS URLS DE LAS IMAGENES Y EL USUARIO
        respuesta = firebase.post('/imagenes', data)

    return {
        'status': 200,
        'data': respuesta
    }

'''
response = lambda_handler({
    'opcion': '2',
    'data': {'url':'www.google.com', 'usuario:':'Diego'}
}, None)

print('REPUESTA: ',response)

'''