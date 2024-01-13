import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import collo1 from '/collo1.jpg'
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function Person() {
  return (
      <motion.div
          initial={ { y: 400 } }
          animate={ { y: 0 } }
          transition={ { type: "spring", duration: 1.8 } }
          className="card card-bordered max-w-1/3 w-96 bg-base-200 items-center justify-center px-6 py-2">
          <div>
              <Avatar className="w-24 h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
          <div className="gap-2">
              <div className="divider divider-neutral">About Me</div>
              <p>
                  ColloDev is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
              </p>
              <div className="divider divider-neutral">Featured Posts</div>
              <p>
                    <span className="font-bold">Shad</span>
                    <span className="text-gray-600"> </span>
              </p>
              <div className="divider divider-neutral">Connect</div>
              <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                      <FaFacebookSquare />
                  </a>
                  <a href="#" className="text-gray-500 h-10 hover:text-blue-500">
                      <FaInstagramSquare />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                      <FaTwitter />
                  </a>
                  <a href="" className= "h-24 text-gray-500 hover:text-blue-500">
                      <FaLinkedinIn />
                  </a>
              </div>
          </div>

    </motion.div>
  )
}

export default Person

    
                    
                    


