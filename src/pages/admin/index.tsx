import AdminLayout from '@components/admin/layouts/AdminLayout';

const Admin = () => {
	return <h2>Admin Page</h2>;
};

Admin.getLayout = (page: any) => <AdminLayout title='Admin'>{page}</AdminLayout>;

export default Admin;