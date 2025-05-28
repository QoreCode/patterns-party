Create a builder for building a house. Add possibility to build: base, advanced and pro smart house solutions

So it should work like this:

const builder = new HouseBuilder()
const director = new HouseDirector(builder)

const house = director.buildBaseHouse()
