import AdminLayout from '@components/admin/layouts/AdminLayout';

const Pages = () => {
	return <h2>pages Page</h2>;
};

Pages.getLayout = (page: any) => <AdminLayout title='Admin'>{page}</AdminLayout>;

export default Pages;