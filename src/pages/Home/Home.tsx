

import Form from "@/components/constants/Modal/Form"
import { Modal } from "@/components/constants/Modal/Modal"
import Person from "@/components/constants/Person/Person"
import { Table } from "@/components/ui/table"
import { motion } from 'framer-motion';




function Home() {
  return (
    <section
      className="bg-base-100 mx-2 mt-4 " >
     
        <Table className="flex flex-col lg:flex-row gap-3 justify-around ">
          <div>
          <Person />
          
          </div>
          <div>
          <motion.div
            initial={ { y: 400 } }
            animate={ { y: 0 } }
            transition={ { type: "spring", duration: 1.8 } }
          >
           
            <div className="divider divider-neutral ">
              <h2 className="text-2xl font-mono font-blod">...Blogs...</h2>
            </div>
            <Modal />
            
            </motion.div>
            <Form />
          </div>
        </Table>
        
    
      

    </section>
  )
}

export default Home