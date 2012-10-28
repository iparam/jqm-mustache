module ApplicationHelper
	def render_javascript
		javascript_include_tag javascript_to_render
	end

	def javascript_to_render
	end
end
