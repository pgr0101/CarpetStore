let {PythonShell} = require('python-shell');

let options = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('test.py', options , function (err ,res) {
  if (err) throw err;
  console.log(res);
});