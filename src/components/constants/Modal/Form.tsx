import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from 'framer-motion';

// const tags = Array.from({ length: 50 }).map(
//     (_, i, a) => `v1.2.0-beta.${a.length - i}`
// )
function Form() {
    return (
        <motion.div
            initial={ { x: 400 } }
            animate={ { x: 0 } }
            transition={ { type: "spring", duration: 1.8 } }
        >
            
            <ScrollArea
                
                className="h-screen w-full  rounded-md border">
                <Table>
                    <TableCaption>Latest blogs</TableCaption>
                    <TableHeader>
                        <TableHead>Feeds</TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content w-full:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className='hero-content  max-w-1/3:'>
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D12AQHOaW_D1HB5QQ/article-cover_image-shrink_720_1280/0/1680373800691?e=1710374400&v=beta&t=P4oWfuUp6BM4W69OaKKcR7gjV1Vrz1xMmAnTtMrX1Ck"
                                        alt="avatar"
                                        width={ 400 }
                                        height={ 200 }
                                        className="rounded-lg"
                                    />
                                    <div className="flex flex-col w-full">
                                        <p>
                                            <span className="font-bold">John Doe</span> uploaded 4
                                            new photos
                                        </p>
                                        {/* <br/> */ }
                                        <p>
                                            <span className="text-xs text-gray-500">
                                                2 hours ago
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </ScrollArea>   
      </motion.div>
      
  )
}

export default Form