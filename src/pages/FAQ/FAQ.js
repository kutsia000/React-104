import { withAuthProtection } from '../../hoc/withAuthProtection';

import {Card} from '../../components/Card';

import {questions} from '../../constants/questions';

const FAQ=(props)=>{

    const renderFAQ=()=>{
        if(questions.length===0){
            return(
                <div className="d-flex w-100 justify-content-between">
                    <h2 className="text-muted">კითხვები მალე დაემატება...</h2>
                </div>
            )
        }

        return(
            questions.map((question,index)=>{
                return(
                    <div key={index}>
                        <Card className="p-4" headerText={question.title}>
                            {question.text}
                        </Card>
                    </div>
                )
            })
        )
    }

    return(
        <>
            {renderFAQ()}
        </>
    )
}

export default withAuthProtection(FAQ);