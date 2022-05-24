const Competitors = require("../../models/competitorSchema");

exports.deletCompetitorByID = async (req, res) => {

    try{
        await Competitors.findByIdAndDelete(req.params.id).exec();
        return res.status(200).send("COMPETITOR DELETED");       
        
    } catch (error) {
        return res.sendStatus(500);
    }

}

exports.deleteAllCompetitors = async (req, res) => {
    
    try{
        const userLoggedID = req.decoded.id;
        await Users.deleteMany({role: 0, createdBy: userLoggedID}).exec();
        return res.status(200).send("ALL COMPETITORS DELETED");      
        
    } catch (error) {
        return res.sendStatus(500);
    }

}
