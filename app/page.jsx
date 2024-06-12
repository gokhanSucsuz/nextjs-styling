"use client"
import { useRouter } from "next/navigation";
import InlineStyle from "./inlineStyle/page";
import Link from "next/link";


export default function Home() {
	const navigate = useRouter()
	const users = [
		"John",
		"Jennifer",
		"Eve",
		"Michael",
		"Brian",
		"Sue",
		"Sally",
		"Leo"
	];


	const handleClick = () => {
		navigate.push("/moduleStyle")
	}
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<div>
				<div>Users List (Inline Style)</div>
				<ul style={{ padding: "24px", backgroundColor: "purple", color: "white" }} >
					{
						users.map((user, index) => <li style={{ backgroundColor: index % 2 == 0 ? "gray" : "black", padding: 4, listStyle: "disc" }} key={user}>{user}</li>)
					}
				</ul>
				<button style={{ padding: 3, backgroundColor: "cyan", borderRadius: "10px", marginTop: "10px" }} onClick={handleClick}>moduleStyle (With useRouter Hook)</button>
			</div>
			<InlineStyle />
			<Link style={{ padding: 3, backgroundColor: "cyan", borderRadius: "10px", marginTop: "10px" }} href="/sassStyle">
				<span>sass Style Page (With Link Component)</span>
			</Link>
		</main >
	);
}
