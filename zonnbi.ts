const magik = magikcraft.io;

function zombieA(){

    const sender = magik.getSender();
    const EntityType = magik.type("entity.EntityType");
    const Zombie = EntityType["Zombie"];

    for (var i = 0; i < 100; i++){
        var arrow = sender.getworld().spawnEntity(magik.aspecto().zonbie);
    }

}
