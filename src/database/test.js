const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')
 
Database.then(async db => {
    //inseir dados na tabela
    await saveOrphanage(db, {
        lat: -23.69732241,
        lng: -46.5385207,
        name: "Lar das meninas",
        about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco.",
        whatsapp: "99898996789",
        images:[
            "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        opening_hours: "Horários de visitas das 18h até 8h",
        open_on_weekends: "0"  

    }, )


    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ')
    console.log(orphanage)

    //deletar um dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '7' "))
})