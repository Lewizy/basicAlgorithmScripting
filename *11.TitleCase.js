let log = console.log;

function titleCase(str) {


    let replaceEvery1stWord = str.split(" ").map((val) => val.replace(/\b([a-z])/g,val.charAt(0).toUpperCase()));
    log(replaceEvery1stWord.join(" "));
    let index0Upper_OthersLowerCase = str.replace(/\w\S*/g,(txt)=> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    log(index0Upper_OthersLowerCase);
    let replace_0_wit_0_Uppercase = str.split(" ").map((val) => val.replace(val.charAt(0),val.charAt(0).toUpperCase())); 
    log(replace_0_wit_0_Uppercase.join(" "));
    let replaceRegexEvery1stWord_toUpperCase = str.toLowerCase().replace(/(^|\s)\S/g, (val) => val.toUpperCase());
    log(replaceRegexEvery1stWord_toUpperCase);//Advanced Solution
  
  
}
log(  titleCase("Im a master of karate McCain")   );

  
  //intermediate code solution
  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  };
  
  function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
 }log(  titleCase("Im a master of karate McCain")   );

