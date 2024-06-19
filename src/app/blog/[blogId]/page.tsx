const City = ({ params }: { params: { blogId: string } }) => {
    return (
        <>
            {params.blogId}
        </>
    )
};

export default City;