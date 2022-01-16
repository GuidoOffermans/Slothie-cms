import AdminLayout from '@components/admin/layouts/AdminLayout';

const Blocks = () => {
	return <h2>Blocks Page</h2>;
};

Blocks.getLayout = (page: any) => <AdminLayout title='Admin'>{page}</AdminLayout>;

export default Blocks;