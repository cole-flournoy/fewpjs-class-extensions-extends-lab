// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((accumulator, currentValue) => accumulator += currentValue,  0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    let tri = this.sides
    if (tri[0] + tri[1] <= tri[2] || tri[1] + tri[2] <= tri[0] || tri[2] + tri[0] <= tri[1]){
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid(){
    let sq = this.sides
    if (sq[0] === sq[1] && sq[1] === sq[2] && sq[2] === sq[3]){
      return true
    } else {
      return false
    }
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
}