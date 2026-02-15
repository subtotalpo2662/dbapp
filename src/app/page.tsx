"use client";

import Image from "next/image";


import{createUser,getUsers} from "../../actions/backend"
export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<h1>DB Test App</h1>
			<button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
				onClick = {async () => {
					const res = await createUser ("John Smith"  + Math.floor(Math.random()*1000));
				}}
			>
				Create User
			</button>
			<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
				onClick = {async () => {
					const res = await getUsers();
					console.log(res)
				}}
			>
				get users
			</button>
		</div>
	);
}
