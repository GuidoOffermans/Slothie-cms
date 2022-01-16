import { useState } from 'react';
import Head from 'next/head';
import MobileNavModal from '../MobileNavModal';
import MobileTopNav from '@components/admin/MobileTopNav';
import AdminSidebar from '../AdminSidebar';
import MainSection from '../MainSection';

const AdminLayout = ({ title, children }: any) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const user = {
		name: 'Guido Offermans',
		image:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	};

	return (
		<>
			<Head>
				<title>{title || 'slothie-cms-admin'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='h-full flex'>
				<MobileNavModal
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
					user={user}
				/>
				{/*<AdminSidebar user={user} />*/}

				<div className='flex-1 min-w-0 flex flex-col overflow-hidden'>
					<MobileTopNav setMobileMenuOpen={setMobileMenuOpen} />

					<main className='flex-1 flex overflow-hidden'>
						<AdminSidebar user={user} />
						{/*<AsideSection />*/}
						<MainSection>{children}</MainSection>
					</main>
				</div>
			</div>
		</>
	);
};

// AdminLayout.authenticate = false;
// AdminLayout.redirectAuthenticatedTo = ({ session }) =>
// 	session.role === 'ADMIN' ? Routes.Admin() : Routes.Home();

export default AdminLayout;
