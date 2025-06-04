import Heading from "../custom-components/Heading";
import Wrapper from "../custom-components/Wrapper";



export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Wrapper className="flex-col gap-6">
                <Heading heading="Contact Us" />
                <div className="bg-[#F5F5F5] text-black rounded-lg p-8">
                    <div className="flex items-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                        <p className="text-lg font-semibold">{`Questions, feedback, or bookings? We’re listening!`}</p>
                    </div>



                </div>
            </Wrapper>
        </div>
    );
}
