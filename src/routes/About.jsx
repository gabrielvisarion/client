import Image from "../components/Image";

const About = () => {
	return (
		<div>
			{/* Image */}
			<div className="flex justify-center mt-8 text-center">
				<img
					src="SFAlchemy.jpeg"
					className="rounded-3xl w-1/3 flex items-center justify-center"
				/>
			</div>

			{/* Description */}
			<div className="flex  flex-col text-center justify-center mt-8">
				<h1 className="text-5xl font-bold text-gray-500 mb-6">
					Welcome to SF Alchemy
				</h1>
				<div className="font-medium">
					<p className="text-lg text-gray-500 mb-4 text-center">
						At SF Alchemy, we believe in turning possibilities into realities.
						Our passion lies in helping businesses and individuals harness the
						true power of Salesforce to create impactful solutions. With a
						perfect mix of creativity, expertise, and innovation, we aim to
						simplify the complex and make the extraordinary achievable.
					</p>
					<p className="text-lg text-gray-500 mb-4 text-center">
						Whether you’re looking for practical tips, deep insights, or
						inspiring stories from the Salesforce ecosystem, SF Alchemy is your
						go-to resource. Join us in this journey of discovery, growth, and
						success.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
