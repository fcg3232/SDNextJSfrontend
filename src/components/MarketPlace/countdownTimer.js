export default function CountdownTimer() {
	const countDownDate = new Date("Feb 01, 2024").getTime();
	const now = new Date().getTime();
	const difference = countDownDate - now;
	let timeLeft = {};
	if (difference > 0) {

		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		};
	}
	return timeLeft;
}