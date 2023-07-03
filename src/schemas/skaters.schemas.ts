import joi from "joi"

import { Skaters } from "protocols"

const skaterSchema = joi.object<Skaters>({
info: {
    name: joi.string().required(),
    age: joi.number().required()
},
schedule:{
    day: joi.string().required(),
    hour: joi.number().required()
}
})

export default skaterSchema