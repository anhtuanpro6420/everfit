import React, {useState, useMemo, useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'src/components/commons/Button/Button';
import Posts from 'src/containers/Newfeeds/Posts/Posts';
import { getPosts, loadMorePosts } from 'src/store/actions/postsAction';
import './Newfeeds.scss';
import ILoading from 'src/assets/images/loading.gif'

const Todos = (props) => {
	const {data, isLoading} = props || {};
	const {data: posts, page, total_pages: totalPages } = data || {};
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const params = {
			page: currentPage
		}
		props.getPosts(params);
	}, [])

	const handleLoadMore = () => {
		const nextPage = currentPage + 1;
		setCurrentPage(nextPage);
		const params = {
			page: nextPage
		}
		props.loadMorePosts(params);
	}

	const renderLoadMore = () => {
		let btnLoadMore = null;
		if (page < totalPages) {
			btnLoadMore = <Button name="Load more" onClick={handleLoadMore}/>
		}
		return btnLoadMore;
	}

	const renderLoadingIcon = () => {
		return <img src={ILoading} alt="loading" />
	}

	return (
		<>
			<h1>Newfeeds</h1>
			{isLoading ? renderLoadingIcon() : (
				<>
					<Posts data={posts}/>
					{renderLoadMore()}
				</>
			)}
			<Link to="/">Todos</Link>
		</>	
	);
}

const mapStateToProps = state => ({
	data: state.posts.data,
	isLoading: state.posts.isLoading
});

const mapDispatchToProps = dispatch => {
	return {
		getPosts: (params) => dispatch(getPosts(params)),
		loadMorePosts: (params) => dispatch(loadMorePosts(params)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
