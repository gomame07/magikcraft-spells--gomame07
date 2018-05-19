const magik = magikcraft.io;

function golem(){

    const sender = magik.getSender();
    const EntityType = magik.type("entity.EntityType");
    const Golem = EntityType['IRON_GOLEM'];

    for (var i = 0; i < 100; i++) {
        var arrow = sender.getWorld().spawnEntity(magik.aspecto(), Golem);
    }

}

