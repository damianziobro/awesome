import React from 'react';
import Link from 'gatsby-link';

import '../pages-sass/index.sass';

function IndexPage() {
	return (
		<div className="index-page">
			<p className="index-page__big-text">
				Not to make you feel dizzy but the challange is worth it. Aim high, have
				fun, <span className="index-page__big-text--white">be awesome.</span>
			</p>
			<img
				className="index-page__icon"
				src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAQAAAC3FX0qAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSETNpp4KuAAADzUlEQVR42u3bMU/bQBTA8eeqEwkSA8yoU6V+ABhRpYxkjRgzMFRdyNaZCYbuVGKJUIZsKFKnDGRnY0FUDI3EF6hUxACIf4dcIkIc39k5O/eser3z3f1i+/zu+SJSwEHECSdERfRVFAcoCWnCKQdpiqOf9IpzwYV60hRnhRXlpGmOiIhq0ixHNSmeo5Y0n6OSlMxRR7JzVJHcOGpI7hwVpHSc4EnpOUGTsnGCJWXnBEriODsnQNKinMBIPjgBkXxxAiH55ARA8s1ZMikPjh9SppM4lm8iIjKQ3eghseaafJQPUpWqiNzLvfyWX9GfZJL8lM8iIvJDvkb4/LnmchwWCOs06XBH3HFHhybr80mF3ng2DhF1ejxhO57oUY8fcIGkZA4RDa6mhv3CkD5dTjmlS58hL1PlVzTihlwQycL5xODVUG84okZlplaFGkfcvKo54NNSSEkcIlo8mvJn2mxZW9uizbM545HW7KBzJiVyKpxPfu8zNp3b3ORsct55zNXMj5TI2eDSlN6yk7rlHW7N2ZdsFESycK5NaZfVTK2v0jUtXBdCstxs46tzuFAfh5OrlPeNZ5kKxs/OwcL9HEyepTynB8tE3fJxdSatja9SK6bMD8n63hlN1F0fHBER8yw95vReskYFAzOzZZoKYntcNTPeIIfowRqzNUx56ok6sdcd02ojtjQ7ySEEHcVsZz45IiLmVXvlNWy1LxComyDHOSpw7nvTBET1OeXpSU7rnR4Abd8cERHaAPTmlqcjOS7fRusdawiaCbQFwJOXJaBbroAmADd5cEREzOKimVDDjeSa+qADwFFuoCMAOol17CT3TI7JFdRyA9UAuLPUSial4KwB8DIbRnoDVcxCfS0zKU2ejW0AhnlxREQYArBtrRdPSpc2ZA+Afq6gPgB7DjVnSWmzoOz7DUlj+xiFqftOdadI792zoJOjKiIif/MEmdarLlWjB3ZNtvWLyLtch7Wco1y3XAZS8JNCWpKCaTsdScWLNSVJQ+iThqQkOHUnqVk+uJIULfCcSXqW4G4kVUkSF5KyNJYTSVei0U5Slwp2IGlL1juQtH1OsZEUfvCykvR9krSS9H00diBp+6xvJenbeGEl6dsaYyMp3LzkQNK2vcxOUrcB0IUksswtmv830Y5J9quUqd1y7dwu2d76kv37IQCOT1IgHF+kgDg+SIFxFiUFyFmEFCgnKylgThZS4Jy0JAWcNCQlHFeSIo4LSRnHRlLISSIp5cwjKebEkZRz3pJKwHlDGnO+K+ZMkUbH8bLH45dUBs4rUlk4hlQQ5x/IZIjhAKEA4QAAAABJRU5ErkJggg"
				alt=""
			/>
			<div className="social-links">
				<p className="social-links__text">
					Look carefully and notice every detail, nothing tricky though.
				</p>
				<ul className="social-links__list">
					<li className="social-links__item">
						<img
							className="social-links__img"
							src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCDEcqUqaAAAAuElEQVQ4y+2RMQrCQBBF34qNmCJIesHGnEC8hGDpcXIPr5C9gJVtLmCdwt5UQUEYi+zKCrtrFlunWv7Mn/93PlJLStVKhKSapI3D9Ev/QcMNmLMlAyDq+CiFZcp5gGIE7UpZQuwPlRcN7u9Mfy2tC4cVDIEdy7SzZj/m4Eu64QA81RVAcnIALsxCwd1V62zs6EAWw/h4Syv78CkUsgd6dQKQkhLYvLvBHIwtqT7h5Cv9CeMIOmlevwD1aOO/mSfCrwAAAABJRU5ErkJggg"
						/>
						/
						<a
							className="social-links__link"
							href="https://www.facebook.com"
							target="_blank"
						>
							Awesome
						</a>
					</li>
					<li className="social-links__item">
						<img
							className="social-links__img"
							src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAQAAADr5dYVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCTUC37/CAAABJUlEQVQoz42SsUtCURTGv2cWPrElaAsH3QJraCoQWoIakmhoUOfoP2gJgra2IIiguWiNsCGMSCgIoiFoaokmiTIcLAp6v4bS3rvvlu83nvt9h++ecySRkBWG2KEOvLDPsEQvRdKSOKBskY/wxC+vHNHkUBIOb8AqPQF5jFtMHlhhTfTxCcAFYz7DBDauGJDEdadQoYArSZQs8ur3m5gLlFvU2GLXYtiQpDj9ymlPxU6apPLKW8f23P5eg2jMS1LM8bStKHiqtSeSoBqh/7F/6imWqXcxzPgNGd67yE/MQ1j8V94kE76dKc5/dm7ywbT9OpOs44XkLQpBWQqXNLNsWvdxQ87sO8npH8nvWSJu5nAkiawWNK5RDcoVetSdLlXRmeOFg38BCMLoAm2YCvcAAAAASUVORK5CYII"
						/>
						/
						<a
							className="social-links__link"
							href="https://www.twitter.com"
							target="_blank"
						>
							Awesome
						</a>
					</li>
					<li className="social-links__item">
						<img
							className="social-links__img"
							src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAQAAABtcaS7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSChUSnMzJAAABHUlEQVQoz42TMSxDURSGv1cVEWUwdSQGYZJ0JamkoSsxsZgkEquE1cDIIGKymMRktTGg0pXJILF0k1CSovkM76Xa1z780829/7l/7vnOhUgWPLGivnjpqt38Jgc8tVV3jiTbe7y2XVvJBXuRpeSiOWc9Vo8MkuzDfql6YKqxN2VXzDXohOPhclvV27glVrCsPgKkmAFgJ6jzLwW+kgH6gyqARTaaTp+DOXCNBbKMUuMGUPW9JfpHny1NUTVNlQy9ZsKEmMKLHrhoTiirOh8lZM2bN++Kqvftj05zTg7Y9CyoQ1ChEg4KAFedGjYUcThs4jBtTdViBw7gboP0kjkL7vuhajmBdsIsvTmWzLF9Wp+c/INg4z9ULbluX5LvG5CyIvpPf1M4AAAAAElFTkSuQmCC"
						/>
						/
						<a
							className="social-links__link"
							href="https://plus.google.com"
							target="_blank"
						>
							Awesome
						</a>
					</li>
				</ul>
			</div>
			<button className="index-page__more-btn" type="button">
				<span className="index-page__more-btn-text">More</span>
			</button>
		</div>
	);
}

export default IndexPage;
