const City = ({ params }: { params: { cityId: string } }) => {
    return (
        <div>
            My city is {params.cityId}
        </div>
    )
};

export default City;