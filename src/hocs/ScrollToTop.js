import React, {useState, useEffect} from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

function ScrollToTop(props) {
    const [isShowing, setIsShowing] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500 ) {
                setIsShowing(true);
            } else {
                setIsShowing(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    })

    return (
			<div
				className='scroll-to-top'
				style={{
					position: 'fixed',
					bottom: '0',
					right: '0',
					color: 'rgb(255, 211, 47)',
                    marginRight: '10px',
                    marginBottom:' 10px',
				}}>
				{isShowing && (
					<div onClick={scrollToTop}>
						<FaArrowAltCircleUp style={{ width: '50px', height: '50px'}} />
					</div>
				)}
			</div>
		);
}

export default ScrollToTop;