import { Table, TableBody, TableCaption } from "@/components/ui/table";
import { motion } from 'framer-motion';
import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function Form() {
    const [blogs, setBlogs] = useState<any[]>([]); // Provide the correct type for useState

    const client = new Client();
    const databases = new Databases(client);

    client
        .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
        .setProject("65a25981e31e3582edd7"); // Your project ID

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments("65a2686f7ecaa9ecdd9f", "65a2687da5691bd47df6");
                setBlogs(response.documents);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={ { type: "spring", duration: 1.8 } }
            className="h-screen w-full"
        >
            {blogs.length > 0 ? (
                
                    <Table className="table bg-slate-50 w-full min-w-2.5">
                        <TableCaption>Blog Posts</TableCaption>
                    <TableBody>
                        <ScrollArea className="h-full ">
                            { blogs.map((item) => (
                                <div className="space-y-4 mb-4 ml-2 mr-2 mt-2 " key={ item.$id }>
                                    <div className="card space-y-10 w-full shadow-lg compact bg-base-100">
                                        <div className=" space-y-3  rounded-lg  card-body">
                                            <h2 className="card-title text-3xl">{ item.title }</h2>
                                            <p>{ item.content }</p>
                                            <p>{ item.author }</p>
                                        </div>
                                    </div>
                                </div>
                            )) }
                    </ScrollArea>
                    </TableBody>
                    </Table>
                
            ) : (
                <span className="loading loading-dots loading-lg">Loading</span>
            )}
        </motion.div>
    );
}

export default Form;
