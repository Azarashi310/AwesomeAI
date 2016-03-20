process.stdin.on('data', (chank)=>{
  var word = String(chank).slice(0,-1);
  var response;
  switch( word ){
    case 'hello':
      response = 'こんにちは';
      break;
    case 'hoge':
      response = 'ホゲホゲ';
      break;
    case 'chitose':
      response = '俺が規約だ';
      break;
    case 'day':
      var date = new Date();
      response = `${['日','月','火','水','木','金','土'][date.getDay()]}曜日`;
      break;
    default:
      response = `unknown:${word}`;
      break;
  }

  console.log(response);
});

