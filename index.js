process.stdin.on('data', (chank)=>{
  var word = String(chank).slice(0,-1);
  var response;
  switch( word ){
    case 'hello':
      response = 'こんにちは';
      break;
    case 'hoge':
      response = 'ホゲホゲ'
      break;
    default:
      response = `unknown:${word}`;
      break;
  }

  console.log(response);
});
