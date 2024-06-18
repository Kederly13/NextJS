const City = ({ params }: { params: { cityId: string } }) => {
    return (
        <>
            My city is {params.cityId}
        </>
    )
};

export default City;