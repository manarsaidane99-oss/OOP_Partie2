class Personnage {

  constructor(nom,pointsDeVie,force) {
    this.nom = nom
    this.pointsDeVie = pointsDeVie
    this.force = force
  }

  attaquer(cible) {
    console.log(this.nom +" attaque "+cible.nom + "!")
    cible.recevoirDegats(this.force)
  }

  recevoirDegats(degats) {
    this.pointsDeVie=this.pointsDeVie-degats
    console.log(this.nom+" a "+this.pointsDeVie+" points de vie restants ")
  }
  estVivant() {
    if (this.pointsDeVie>0) {
      return true
    } else {
      return false
    }
}
}


class Guerrier extends Personnage {
  constructor(nom,pointsDeVie,force,arme) {
    super(nom,pointsDeVie,force)
    this.arme=arme
  }
  utiliserArme(cible) {
    console.log(this.nom+" attaque avec "+this.arme +"!")
    cible.recevoirDegats(this.force)
  }

  attaquer(cible) {
    this.utiliserArme(cible)
  }
}


class Mage extends Personnage {

  constructor(nom,pointsDeVie,force,mana) {
    super(nom,pointsDeVie,force)
    this.mana=mana
  }

  lancerSort(cible) {

    if (this.mana<20) {
      return "Pas assez de mana !"
    }

    this.mana=this.mana-20
    console.log(this.nom +" lance un sort ! ")
    cible.recevoirDegats(30)
  }

  regenererMana() {
    this.mana=this.mana+10
    if (this.mana>100) {
      this.mana=100
    }
  }

  attaquer(cible) {
    return this.lancerSort(cible)
  }
}
let p1 =new Personnage("Ali", 100, 20)
let p2 = new Personnage("sami", 80, 10)

console.log(p1.attaquer(p2))
console.log(p1.recevoirDegats(20))
console.log(p2.estVivant())
let g1=new Guerrier("rami",100,20,"epee")
console.log(g1.utiliserArme(p1))
console.log(g1.attaquer(p1))
let mage =new Mage("Anna",80,10,50)
console.log(mage.lancerSort(g1))
console.log(mage.regenererMana())
console.log(mage.mana)