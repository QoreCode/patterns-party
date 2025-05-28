Create a factories that will create all devices for inside and outside usage

So it should work like this:

const abstractFactory = new LifeSpaceFactory()
const houseEntitiesFactory = abstractFactory.createHouseEntitiesFactory()

const lamp = houseEntitiesFactory.createLamp()
