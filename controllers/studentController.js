import StudentModel from "../model/student.js"

class studentController{

    static createDoc =  async(req, res) => {
        // console.log(req.body)
       try {
        const {name, age, gender, course, fees} = req.body
        const doc = new StudentModel({
            name : name,
            age: age,
            gender: gender,
            course: course,
            fees: fees
        })
        //saving document
        const result = await doc.save()
        // console.log(result)
        res.redirect("/student")
       } catch (error) {
        console.log(error)
       }
    }

    static getAllDoc = async (req, res) =>{
        try {
            const result = await StudentModel.find()
            // console.log(result)
            res.render("index",{data: result}) 
        } catch (error) {
            console.log(error)
        }
 
    }
// show edit form with data
    static editDoc = async (req, res) =>{
       try {
        // console.log(req.params.id)
        const result = await StudentModel.findById(req.params.id)
        // console.log(result)
        res.render("edit",{data: result})
       } catch (error) {
        console.log(error)
       } 
    }

// Update Document
    static upadteDocById = async (req, res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            
        } catch (error) {
            console.log(error)
        }
        res.redirect("/student")
    }

// Delete Document
    static deleteDocById = async (req, res) =>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
           console.log(error) 
        }
        // console.log(req.params.id)
       
    }
}

export default studentController