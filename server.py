from bottle import route, run, static_file

@route('/')
def root():
    filename = "index.html"
    return static_file(filename, root="./tmp")
    
@route('/<filename:path>')
def static(filename):
    return static_file(filename, root="./tmp")

run(host='127.0.0.1', port=12345, debug=True, reloader=True)