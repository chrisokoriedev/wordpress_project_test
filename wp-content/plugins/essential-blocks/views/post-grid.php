<?php
	$_parent_classes  = array(
		'eb-parent-wrapper',
		'eb-parent-' . $blockId,
		$classHook,
	);
	$_wrapper_classes = array(
		$blockId,
		$preset,
		$className,
	);
	?>

<div class="<?php esc_attr_e( implode( ' ', $_parent_classes ) ); ?>">
	<div
		class="eb-post-grid-wrapper                                                                                                                                                                                                                                                                                                                                                               <?php esc_attr_e( implode( ' ', $_wrapper_classes ) ); ?>"
		data-id="<?php esc_attr_e( $blockId ); ?>"
		data-querydata="<?php esc_attr_e( serialize( $queryData ) ); ?>"
		data-attributes="<?php esc_attr_e( serialize( $essentialAttr ) ); ?>">

		<?php
			/**
			 * Category Filter Views
			 */
		if ( $showTaxonomyFilter && ! empty( $selectedTaxonomy ) && ! empty( $selectedTaxonomyItems ) ) {
			$selectedTaxonomy = json_decode( $selectedTaxonomy );
			$categories       = json_decode( $selectedTaxonomyItems );
			$helper::views(
				'post-partials/category-filter',
				array(
					'taxonomy'   => $selectedTaxonomy->value,
					'categories' => $categories,
				)
			);
		}

			/**
			 * Post Grid Markup
			 */

		if ( ! empty( $posts ) ) {
			$_defined_vars = get_defined_vars();
			$_params       = isset( $_defined_vars['data'] ) ? $_defined_vars['data'] : array();

			$_params = array_merge(
				$_params,
				array(
					'posts'      => $posts,
					'queryData'  => isset( $queryData ) ? $queryData : array(),
					'source'     => isset( $queryData['source'] ) ? $queryData['source'] : 'post',
					'headerMeta' => ! empty( $headerMeta ) ? json_decode( $headerMeta ) : array(),
					'footerMeta' => ! empty( $footerMeta ) ? json_decode( $footerMeta ) : array(),
				)
			);

			$helper::views( 'post-partials/grid-markup', $_params );
		}

			/**
			 * No Post Markup
			 */
		if ( empty( $posts ) ) {
			$helper::views(
				'common/no-content',
				array(
					'content' => __( 'No Posts Found', 'essential-blocks' ),
				)
			);
		}

			/**
			 * Pagination Markup
			 */
		if ( ! empty( $posts ) && is_array( $loadMoreOptions ) && is_array( $queryData ) ) {
			$helper::views(
				'common/pagination',
				array_merge(
					$loadMoreOptions,
					$queryData,
					array(
						'posts' => $posts,
					)
				)
			);
		}
		?>
	</div>
</div>
