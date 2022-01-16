import Link from 'next/link';

const Home = () => {
	// const { data, isLoading } = trpc.useQuery(['basehello', { text: 'Guido' }]);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<div className='container'>
			<main>
				<h2>Home Page</h2>
				<Link href='./admin'>
					<a className='text-indigo-600 hover:text-indigo-900 hover:bg-stone-200'>
						Go to the Admin Page
					</a>
				</Link>
			</main>
		</div>
	);
};

// Home.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Home;
