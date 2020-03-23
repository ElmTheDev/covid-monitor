const Discord = require("discord.js");
const Embed = Discord.MessageEmbed;

const SendNotification = (webhook, oldData, newData) => {
    let embed = new Embed();
    console.log(oldData)
    embed.setFooter("Elms COVID-19 Monitor")
        .setTimestamp()
        .setTitle("New Update")
        .addField(`Confirmed Cases`, `${oldData.confirmed !== -1 ? `${oldData.confirmed} => ${newData.confirmed}` : `${newData.confirmed}`}`, false)
        .addField(`Deaths`, `${oldData.deaths !== -1 ? `${oldData.deaths} => ${newData.deaths}` : `${newData.deaths}`}`, false)
        .addField(`Recovered`, `${oldData.recovered !== -1 ? `${oldData.recovered} => ${newData.recovered}` : `${newData.recovered}`}`, false)
        .setColor(0xFFB6C1)
        .setThumbnail("https://seiuhcilin.org/wp-content/uploads/2020/03/Coronavirus-COVID-19.jpg");

    let splitWebhook = webhook.split("webhooks/")[1].split("/");
    let client = new Discord.WebhookClient(splitWebhook[0], splitWebhook[1]);
    client.send(embed);
}

module.exports = {
    SendNotification
};