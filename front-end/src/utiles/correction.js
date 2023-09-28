export default function correction(question, answer) {
  let sum = 0;
  

  let arr = []
  for (let i=0; i<question.length; i++) {
    arr.push(question[i].options)
  }
  let node = []
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      node.push(arr[i][k])
    }
  }

  for (let i = 0; i < node.length; i++) {
    for (let k = 0; k < answer.length; k++) {
      if(node[i].id === answer[k].optionId && node[i].isCorrect === answer[k].isCorrect) {
        sum ++
      }
    }
  }

  return sum
}