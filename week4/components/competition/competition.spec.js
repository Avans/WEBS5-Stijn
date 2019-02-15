
var controller = undefined;
var CompetitionCtrl = require('./competition.ctrl');

describe('Competitions', () => {

    beforeach(() => {
        controller = new CompetitionCtrl();
    })

    describe('/GET competitions', () => {
      
        it('it should GET all the competitions', (done) => {
            controller.getCompetitions()
                .then((err, res) => {
                    
                    
                })
        })
    })
})

