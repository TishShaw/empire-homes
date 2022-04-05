import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import HOUSE from '../../assets/images/housewithkeys.jpeg';
import LoginForm from '../Login/LoginForm';
import { USER_SIGNUP_SUCCESSFUL } from '../../redux/constants/constants';

import './HeaderNav.styles.css';

function HeaderNav({ authReducer: { isAuthenticated, login, loading }, logout }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

	

	// useEffect(() => {
	// 	dispatch()
	// }, [dispatch])

	const user = useSelector((state) => state.authReducer);
	console.log(user);
	return (
		<nav className='navbar navbar-expand-lg navbar-* bg-*' style={{backgroundColor: 'transparent'}}>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Empire Homes
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarText'
					aria-controls='navbarText'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarText'>
					<ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/Feed'>
								Search
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Buy
							</a>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Another action
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Sell
							</a>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Another action
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact Us
							</Link>
						</li>
					</ul>

					<span className='navbar-text'>
						{isAuthenticated ? (
							<div
								className='container'
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<h1 className='auth-name'>T</h1>
								<div className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='navbarDropdown'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false' />
									<ul
										className='dropdown-menu'
										aria-labelledby='navbarDropdown'>
										<li>
											<a className='dropdown-item' href='#'>
												Action
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Another action
											</a>
										</li>
										<li>
											<hr className='dropdown-divider' />
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												<Button onClick={logout}>Logout</Button>
											</a>
										</li>
									</ul>
								</div>
							</div>
						) : (
							<div>
								<Button variant='primary' onClick={handleShow}>
									Login
								</Button>
								<Modal
									show={show}
									onHide={handleClose}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyCenter: 'center',
										marginTop: '150px',
									}}>
									<div style={{ height: '500px', width: '900px' }}>
										<div className='modal-wrapper'>
											<div className='modal-container'>
												<div className='modalImg'>
													<img src={HOUSE} alt='' className='modal_image' />
												</div>
												<div className='modalForm'>
													<LoginForm />
												</div>
											</div>
										</div>
										<>
											<h6 sm variant='secondary' onClick={handleClose}>
												Close
											</h6>
											
										</>
									</div>
								</Modal>
							</div>
						)}
					</span>
				</div>
			</div>
		</nav>
	);
}
HeaderNav.propTypes = {
	logout: PropTypes.func.isRequired,
	authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	authReducer: state.authReducer,
});

export default connect(mapStateToProps, { logout })(HeaderNav);
